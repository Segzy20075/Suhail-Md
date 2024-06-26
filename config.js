const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_41_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJWdC9LbU9iV0gvZlRyVzNlTDdnQVVva3FZMWFKbGtsYk5zYUdwQWJqRm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRiTzRoeEFnVDhxV0tNcTVQekZmVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmU2ZmU2ODUtY2ViOC00M2E5LTllY2MtOGUyYTljM2FjN2Y0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDgwLFxuICAgICAgMTg2LFxuICAgICAgMzEsXG4gICAgICAxOTQsXG4gICAgICA1NCxcbiAgICAgIDUwLFxuICAgICAgMTA1LFxuICAgICAgMjQ0LFxuICAgICAgMTU5LFxuICAgICAgMTMzLFxuICAgICAgMTc2LFxuICAgICAgMTcsXG4gICAgICAyMCxcbiAgICAgIDExNSxcbiAgICAgIDE0MSxcbiAgICAgIDE3MSxcbiAgICAgIDEzOCxcbiAgICAgIDE0MyxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgOSxcbiAgICAgIDM1LFxuICAgICAgMTE4LFxuICAgICAgMjE5LFxuICAgICAgMTIyLFxuICAgICAgNzAsXG4gICAgICAyMTcsXG4gICAgICAxNDUsXG4gICAgICAxMjIsXG4gICAgICAxNzMsXG4gICAgICAxMzMsXG4gICAgICAxMDMsXG4gICAgICAxMTAsXG4gICAgICA1LFxuICAgICAgNzIsXG4gICAgICA5NCxcbiAgICAgIDI1MixcbiAgICAgIDE4MCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDM0JTR0xDMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1NDY5OTU0MToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE1OTY0NTE5NjU3NTE0OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tQaXF0c0hFSWZPOHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY01RUFBzWStrNzFYSVpwdlBNdERWWnJjcnBha2tlSHdDZmhqQ1o5T1N3Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpejZaSE1tWGQ3TVpZVkpVdncvQ2grZTNQTXV2em9wRWQ4aW1Pbm5QV0FaT1R5VS9TN04wUnB4NTNLYU5xazAzUVl6RkdnTEQxTUF6aTBFclZ4YVNCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzTTJVUnNHWHZQVWp2VGMxSTFIZi9BM0N6VThrajk1UFR0WWZTcE9hMUEvZjBaeHNPeTJySW0yOFRsdjhyeWNHbmd5S0dSUGQyUTVQSDdDWkdBcUVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU0Njk5NTQxOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTQ0NTI1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQwZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDBmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSk55bys0N3pkZUF2aXVBNUtGc2twMFIyR2JoV0tvdmp1dnFjdmZIeC96QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcwNTg5NzMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk0NDUyNjM5NjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
