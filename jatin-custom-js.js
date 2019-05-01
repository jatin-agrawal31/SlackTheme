$('a[data-message-sender="U7UKE4JN4"]:not(.name-changed)').each(function(i, block) {
  block.innerText = 'Wei Wei';
  block.classList.add('name-changed');
});
$('a[data-message-sender="UAU3VA7JB"]:not(.name-changed)').each(function(i, block) {
  block.innerText = 'Proposition "Ashley" Chicken 🐔';
  block.classList.add('name-changed');
});
$('a[data-message-sender="U0XK8MGFP"]:not(.name-changed)').each(function(i, block) {
  block.innerText = "I'm CEO,";
  block.classList.add('name-changed');
});
// $('a[data-message-sender="U1LDS3P4H"]:not(.name-changed)').each(function(i, block) {
//   block.innerText = "<3 Sandip";
//   block.classList.add('name-changed');
});
$('a[data-message-sender="UB1BEA42X"]:not(.name-changed)').each(function(i, block) {
  block.innerText = "Utility Bill";
  block.classList.add('name-changed');
});
$('a[data-message-sender="U3M8891V5"]:not(.name-changed)').each(function(i, block) {
  block.innerText = "Running Late 🏃";
  block.classList.add('name-changed');
});
$('a[data-message-sender="U8F0V67NZ"]:not(.name-changed)').each(function(i, block) {
  block.innerText = "The PR(ops) Guy";
  block.classList.add('name-changed');
});
if ($('link#inserted-fonts').length === 0) {
  const html = '<link rel="stylesheet" href=https://fonts.googleapis.com/css?family=Asap|Roboto:100,300|Ubuntu:300,400" id="inserted-fonts"/>'
  $(html).appendTo('head');
}
