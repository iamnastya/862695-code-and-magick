'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// вспомогательные массивы
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
// // генератор рандомных значений из массивов
// var name = names[Math.floor(Math.random()*names.length)] + ' ' + surnames[Math.floor(Math.random()*surnames.length)];
// var coatColor = coatColors[Math.floor(Math.random()*coatColors.length)];
// var eyesColor = eyesColors[Math.floor(Math.random()*eyesColors.length)];
// eslint.js deleted
function getName() {

  return names[Math.floor(Math.random()*names.length)] + ' ' + surnames[Math.floor(Math.random()*surnames.length)];

}

function getCoatColor() {

  return coatColors[Math.floor(Math.random()*coatColors.length)];

}

function getEyesColor() {

  return eyesColors[Math.floor(Math.random()*eyesColors.length)];

}

var wizards = [
  {
    name: getName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  }
]

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  fragment.appendChild(wizardElement)

}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');




