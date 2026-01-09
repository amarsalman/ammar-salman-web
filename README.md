# Amar Salman — Static website (مجلد جاهز للضغط والنشر)

هذه النسخة منظمة وجاهزة للنشر على Vercel (أو أي استضافة صفحات ثابتة).

بنية الملفات:
- index.html
- css/style.css
- js/main.js
- images/og-image.svg

تعليمات سريعة لإنشاء الملف المضغوط ammar-websitee.zip:
1. ضع كل الملفات في مجلد محلي (مثلاً `ammar-websitee/`).
2. افتح الطرفية داخل ذلك المجلد الأب ثم شغّل:
   - Unix/macOS:
     ```
     cd ammar-websitee
     zip -r ../ammar-websitee.zip .
     ```
   - Windows (PowerShell):
     ```
     Compress-Archive -Path .\ammar-websitee\* -DestinationPath .\ammar-websitee.zip
     ```

نشر على Vercel:
- أسهل طريقة: سحب الملف `ammar-websitee.zip` أو المجلد إلى https://vercel.com/import/static
- أو استخدم Vercel CLI:
  1. ثبت CLI إن لم يكن مثبتاً:
     ```
     npm i -g vercel
     ```
  2. نشر:
     ```
     vercel deploy --prod
     ```
  (تأكد من أنك في داخل مجلد المشروع أو مرر مسار المجلد إلى الأمر.)

نصائح:
- استبدل `images/og-image.svg` بصورة حقيقية إن رغبت (صورة بصيغة PNG أو JPG أو SVG).
- إن أردت استخدام GitHub + Vercel، ادفع الملفات إلى مستودع GitHub ثم اربط المستودع في Vercel. Vercel سيعيد النشر تلقائياً عند كل دفع.

إجراء: قم بإنشاء/تحديث الملفات أعلاه في فرع `ammar-websitee` ثم قم بعمل commit مع الرسالة: "Add organized static site (ammar-websitee)".
