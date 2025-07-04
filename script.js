document.getElementById('yesBtn').onclick = function() {
  document.getElementById('result').classList.remove('hidden');
};

document.getElementById('noBtn').onclick = function() {
  alert('Không được chọn không? 😢');
};

document.getElementById('seriousBtn').onclick = function() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('final').classList.remove('hidden');
}; 