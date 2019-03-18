'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
{
  type:"list",
  name:"Tools",
  message:"Select tools:\n ",
  choices:
  [
  "[!] Lihat Informasi Tools",
  "[-] BomLikeTarget (With Sleep)",
  "[-] Botlike v1 (With Sleep)",
  "[-] Botlike v2 (Automatic)",
  "[-] Delete All POST IG",
  "[-] Unfollow All Following",
  "[-] Unfollow Not Followback",
  "[-] Follow Followers Target",
  "[-] Follow Account By Media",
  "[-] Follow Account By Hastag",
  "[-] Follow Account By Location",
  "\n"
  ] 
}
]
const main = async () => {
  //var syntaxtools;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){

      case "[!] Lihat Informasi Tools":
      const infotools = require('./tools/infotools.js');
      break;

      case "[-] BomLikeTarget (With Sleep)":
      const bomliketarget = require('./tools/bomliketarget.js');
      await bomliketarget();
      break;

      case "[-] Botlike v1 (With Sleep)":
      const botlike = require('./tools/botlike.js');
      await botlike();
      break;

      case "[-] Botlike v2 (Automatic)":
      const botlike2 = require('./tools/botlike2.js');
      await botlike2();
      break;

      case "[-] Delete All POST IG":
      const dellallphoto = require('./tools/dellallphoto.js');
      await dellallphoto();
      break;

      case "[-] Unfollow All Following":
      const unfollall = require('./tools/unfollall.js');
      await unfollall();
      break;

      case "[-] Unfollow Not Followback":
      const unfollnotfollback = require('./tools/unfollnotfollback.js');
      await unfollnotfollback();
      break;

      case "[-] Follow Followers Target":
      const fftauto = require('./tools/fftauto.js');
      await fftauto();
      break;

      case "[-] Follow Account By Media":
      const flmauto = require('./tools/flmauto.js');
      await flmauto();
      break;

      case "[-] Follow Account By Hastag":
      const fah = require('./tools/fah.js');
      await fah();
      break;

      case "[-] Follow Account By Location":
      const flaauto = require('./tools/flaauto.js');
      await flaauto();
      break;

      default:
      console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this tool!\n[!] Please try again!');
    }
  } catch(e) {
    }
  }

  console.log(chalk`
    {bold.green
  Ξ TITLE  : ⚡ INSTAGRAM TOOLS ⚡
  Ξ UPDATE : 19.03.2019 01.20 WIB
  Ξ AUTHOR : Pemburuberkah_
  Ξ FILES  : https://github.com/officialputuid/toolsig
https://github.com/kakman24/ig
    }`);
  main()
