let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^بحبك| عاوزه اتجوزك|غون بحبك|بموت فيك|نتجوز|يا غون هنتجوز امتي| انت ليا| بموت فيك$/i.test(m.text)) { 
 responses = [ 
 'شكرا  ',  
 'هفكر في الموضوع',  
 'و انا',  
 'استحيت',  
 '.   لا بس بتكثف  ',  
 'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
 'طيب و بعدين '  
 ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
 responses = [ 
 'وعليكم السلام',  
 'وعليكم السلام منور',  
 ' وعليكم السلام كيفك',  
 'وعليكم السلام ورحمة الله وبركاته' 
 ]; 
 }else if (/^ غون عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشباب$/i.test(m.text)) { 
 responses = [ 
 'كل شيء بخير الحمد لله ',  
 ' مش عارف  ',  
 ' الحمد لله ماشي الحال ',  
 'الحمد الله',  
 ' لو انت كويس انا كويس' 
 ]; 
 }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
 responses = [ 
 'حرام ي حب ',  
 ' ربنا يسامحك ',  
 ' يسطاا صلي علي النبي واهدي',  
 'الله يهديك ',  
 ' استغفر ربك' 
 ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تم الاضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
 responses = [ 
 ' عاشت ايدك ✨❤️',  
 'تسلم ايدك ✨❤️ ',  
 'عاش ✨❤️ ',  
 'غـون ✨❤️',  
 'اوكي ✨❤️' 
]; 
 }else if (/^غون|كيريتو|ياغون$/i.test(m.text)) { 
 responses = [ 
 'اي يقلب غون 😍',  
 ' قلب غـون 😍',  
 'روح غـون 😍',  
 'قلب غـون من جوه 😍 ',  
 ' عيون غون اصلا 😍' 
]; 
 }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
 responses = [ 
 'صباح الفل ✨💜',  
 'صباح النور ✨💜 ',  
 ' صباح الكاريزما ✨💜',  
 'انت صحيت وانا رايح انام 🐦👋🏻 ',  
 'روح نام تاني بقي 🙃' 
   ]; 
 }else if (/^كل ده نور|الجروب نور كده ليه|ايه النور ده|منورين الجدد|منورين|منور $/i.test(m.text)) { 
 responses = [ 
 'نوري انا✨♥',  
 'الجروب نور فعلا✨♥',  
 '✨♥',  
 'الجروب منور✨💜',  
 '✨💜' 
 ]; 
 }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
 responses = [ 
 'تمام', 
              ' تمام',  
                 ' تمام',  
 'تمام ',  
 'تمام' 
 ]; 
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;