const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔══😎RUBY_MWOL😎══╗*\n           \n*⚜═POOCHA_SER═⚜*\n\n*owner NABUHAN - http://Wa.me/+918289836232*\n*            *\n*╚══🔱🔱🔱🔱🔱══╝*\n\n*▷Creator: NABUHAN*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔══😎RUBY_MWOL😎══╗*\n           \n*⚜═POOCHA_SER═⚜*\n\n*owner NABUHAN - http://Wa.me/+918289836232*\n*       *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: NABUHAN*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*\n💥═RUBY_MWOL  Owner NABUHAN═💥*\n\n*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

