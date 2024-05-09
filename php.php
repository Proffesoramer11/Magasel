<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $commenter = $_POST['commenter'];
    $comment = $_POST['comment'];

    // تأكيد إرسال التعليق
    echo "Thank you for your comment, $commenter!";

    // إرسال التعليق إلى الجاميل
    $to = 'alaawaali4354@gmail.com';
    $subject = 'New Comment from ' . $commenter;
    $body = $comment;
    $headers = 'From: ' . $email . "\r\n" .
                'Reply-To: ' . $email . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Your comment has been sent successfully.";
    } else {
        echo "There was a problem sending your comment. Please try again later.";
    }
} else {
    // إذا لم يكن الطلب من نوع POST، يعيد المستخدم إلى الصفحة الرئيسية
    header('Location: index.html');
}
?>