let current = Number(localStorage.getItem('awsQuizCurrent') || 0);
let correctCount = Number(localStorage.getItem('awsQuizCorrect') || 0);
let answered = JSON.parse(localStorage.getItem('awsQuizAnswered') || '{}');
const qCount = document.getElementById('qCount');
const score = document.getElementById('score');
const percent = document.getElementById('percent');
const progressBar = document.getElementById('progressBar');
const badge = document.getElementById('questionBadge');
const multiBadge = document.getElementById('multiBadge');
const questionText = document.getElementById('questionText');
const answerForm = document.getElementById('answerForm');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const feedback = document.getElementById('feedback');
const resetBtn = document.getElementById('resetBtn');
function save(){localStorage.setItem('awsQuizCurrent', current);localStorage.setItem('awsQuizCorrect', correctCount);localStorage.setItem('awsQuizAnswered', JSON.stringify(answered));}
function updateStats(){const done=Object.keys(answered).length; qCount.textContent=`${Math.min(current+1, QUESTIONS.length)} / ${QUESTIONS.length}`; score.textContent=correctCount; percent.textContent=done?`${Math.round((correctCount/done)*100)}%`:'0%'; progressBar.style.width=`${(done/QUESTIONS.length)*100}%`;}
function sameAnswer(a,b){return a.length===b.length && a.every(x=>b.includes(x));}
function render(){updateStats(); feedback.classList.add('hidden'); nextBtn.classList.add('hidden'); submitBtn.classList.remove('hidden'); submitBtn.disabled=false; if(current>=QUESTIONS.length){document.getElementById('quizCard').innerHTML=`<div class="finished"><span class="pill">Complete</span><h2>You finished all ${QUESTIONS.length} questions.</h2><p>Your final score: <b>${correctCount}/${QUESTIONS.length}</b></p><button class="primary" onclick="resetQuiz()">Start over</button></div>`; qCount.textContent=`${QUESTIONS.length} / ${QUESTIONS.length}`; progressBar.style.width='100%'; return;} const q=QUESTIONS[current]; badge.textContent=`Question ${q.id}`; multiBadge.classList.toggle('hidden', q.correct.length < 2); questionText.textContent=q.question; answerForm.innerHTML=''; const type=q.correct.length>1?'checkbox':'radio'; q.options.forEach((opt,i)=>{const label=document.createElement('label'); label.className='answer'; label.innerHTML=`<input type="${type}" name="answer" value="${i}"><span><span class="choiceLetter">${String.fromCharCode(65+i)}.</span>${opt}</span>`; answerForm.appendChild(label);});}
function showFeedback(isCorrect, selected){const q=QUESTIONS[current]; feedback.classList.remove('hidden'); const selectedLetters=selected.map(i=>String.fromCharCode(65+i)).join(', ') || 'None'; feedback.innerHTML=`<p class="result ${isCorrect?'correct':'wrong'}">${isCorrect?'Correct':'Not quite'}</p><p><b>Your answer:</b> ${selectedLetters}<br><b>Correct answer:</b> ${q.answerText}</p><div class="explainBlock tip"><h3>Key exam clue</h3><p>${q.examTip || 'Match the service to the main requirement and remove answers that add unnecessary operations.'}</p></div><div class="explainBlock"><h3>Why the right answer is right</h3><p>${q.whyRight}</p></div><div class="explainBlock"><h3>Why the other answers are wrong</h3><div class="wrongList">${q.whyWrong.map(w=>`<div class="wrongItem"><b>${w.choice}. ${w.text}</b><br><span>${w.reason}</span></div>`).join('')}</div></div><div class="explainBlock"><h3>Services used in this question</h3><div class="serviceGrid">${q.services.length?q.services.map(s=>`<div class="service"><b>${s.name}</b><span>${s.definition}</span></div>`).join(''):'<p>No major AWS service names were detected for this question.</p>'}</div></div>`; submitBtn.classList.add('hidden'); nextBtn.classList.remove('hidden');}
submitBtn.addEventListener('click', e=>{e.preventDefault(); const selected=[...answerForm.querySelectorAll('input:checked')].map(i=>Number(i.value)); const q=QUESTIONS[current]; if(!selected.length){alert('Pick an answer first.');return;} if(q.correct.length>1 && selected.length!==q.correct.length){alert(`This one says choose ${q.correct.length}. Pick exactly ${q.correct.length} answers.`);return;} const isCorrect=sameAnswer(selected, q.correct); if(answered[q.id]===undefined){answered[q.id]=isCorrect; if(isCorrect) correctCount++; save();} showFeedback(isCorrect, selected); updateStats(); window.scrollTo({top:0,behavior:'smooth'});});
nextBtn.addEventListener('click', e=>{e.preventDefault(); current++; save(); render(); window.scrollTo({top:0,behavior:'smooth'});});
function resetQuiz(){current=0;correctCount=0;answered={};localStorage.removeItem('awsQuizCurrent');localStorage.removeItem('awsQuizCorrect');localStorage.removeItem('awsQuizAnswered');location.reload();}
resetBtn.addEventListener('click', resetQuiz);
render();
