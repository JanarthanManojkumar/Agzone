<?php
include_once('dbconnection.php');

if (isset($_POST['submit'])) {

    //fetch from html
    $UserName = $_POST["UserName"];
    $Password = $_POST['Password'];

    $query1 = "SELECT * FROM `membership` WHERE UserName= '$UserName'";
    $duplicate = mysqli_query($con, $query1);


    //Selection from database
    $query = "SELECT `Password`  FROM `membership` where UserName='$UserName';";
    $result = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($result);
    if (mysqli_num_rows($result) > 0) {
        //Confirmation check
        if ($Password == $row['Password']) {
            $_SESSION['login'] = true;
            $_SESSION['name'] = $row['UserName'];
            $_SESSION['Pass'] = $UserName;
            
            header("location:index.php");


        } else {
            echo "<script>alert('Wrong password');</script>";
        }
    } else {
        echo "<script>alert('User not registered');</script>";
    }
}





?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="loginStyle.css">
    <title>Login</title>
</head>
<body>

    <div class="container">
        <div class="image-side">
            
        </div>
        <div class="content-side">
           <div class="login-heading">
            <img src="Images/agzone-logo.png" alt="AgZone" title="AgZone">
           </div>
           <p id="sub-heading-1">Login</p>
           <p id="sub-heading-2">Log to your account</p>
           <p id="sub-heading-3">Thank you for get back to AgZone,lets access our the best recommendation for you</p>
           <div class="form">
            <form action="login.php" method="post">
                
                <label for="username">Username</label><br>
                <input type="text" id="username" name="UserName" class="username" placeholder="Email or Phone Number" >
               
          
            
                <label for="Password">Password</label><br>
                <input type="password" id="Password" name="Password" class="Password" placeholder="Password">
                

                <div class="rememberme">
                    <div class="rem">
                        <input type="checkbox" id="remember-me-check">
                        <label for="remember-me" id="rem">Remember me</label>
                    </div>
                    <p id="reser-password">Reset Password?</p>
                   </div>
        
                   
                    <button type="submit" name="submit" class="submit">Sign In</button>
            </form>
           </div>
           
           
         <p id="footer">Don't have an account yet? <a href="registration.php">Register here</a></p>
        </div>
    </div>

    

</body>
</html>


