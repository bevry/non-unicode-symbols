'use strict';

var main = {
	tick: '✔︎',
	cross: '✖',
	star: '★',
	square: '▇',
	circle: '●',
	info: 'ℹ',
	warning: '⚠',
	hamburger: '☰',
	mustache: '෴',
	heart: '♥',
	arrowUp: '↑',
	arrowDown: '↓',
	arrowLeft: '←',
	arrowRight: '→'
};

var win = {
	tick: '√',
	cross: '×',
	star: '*',
	square: '█',
	circle: '•',
	info: 'i',
	warning: '‼',
	hamburger: '≡',
	mustache: '┌─┐',
	heart: main.heart,
	arrowUp: main.arrowUp,
	arrowDown: main.arrowDown,
	arrowLeft: main.arrowLeft,
	arrowRight: main.arrowRight
};

module.exports = process.platform === 'win32' ? win : main;
