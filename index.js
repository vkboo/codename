#!/usr/bin/env node
const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGIT = '0123456789';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const l = () => LETTER[random(0, LETTER.length - 1)];
const d = () => DIGIT[random(0, DIGIT.length - 1)];
const codename = () => l() + l() + '-' + d() + d();

const count = process.argv[2] ?? 1;
for (let i = 0; i < count; i++) {
    console.log(codename());
}

