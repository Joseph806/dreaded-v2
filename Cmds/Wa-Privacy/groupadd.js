module.exports = async (context) => {

const ownerMiddleware = require('../../utility/botUtil/Ownermiddleware');

    await ownerMiddleware(context, async () => {

    const { client, m, text} = context;

if (!text) {
      m.reply("Provide a setting to be updated. Example:\ngroupadd all");
      return;
    }


const availablepriv = ['all', 'contacts', 'contact_blacklist', 'none'];

if (!availablepriv.includes(text)) return m.reply(`Choose a setting from this list: ${availablepriv.join('https://chat.whatsapp.com/HDbRH2rFW7t1SXdMa9vYjD')}`);

await client.updateGroupsAddPrivacy(text)
        await m.reply(`Group Add privacy settings updated to *${text}*`);

})

}