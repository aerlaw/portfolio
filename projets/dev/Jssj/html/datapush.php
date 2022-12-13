<?php /*
function connectDB(){
    $dsn = 'mysql:dbname=empdept;host=127.0.0.1';
    $user = 'root';
    $password = '';
    try{
        $link = new PDO($dsn, $user, $password);
        return $link;
    }
    catch(Exception $e){
        return false;
    }
}
$conn = connectDB();
function connectUser($email,$pwd){
    //connexion à la db
    $link = connectDB();
    // verification de l'existance de l'utilisateur
    if(!$link){
        echo "Problem de connexion a la database";
        return false;
    }
    else{

    $req = "select * from user where emailUser=? and passwordUser=?";
    $stmt = $link->prepare($req);
    if($stmt){
        $stmt->execute([$email,$pwd]);
            if($stmt->rowCount()>0){
                // utilisateur existe connexion reussite et redirection vers la page profil
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                //var_dump($user);
                $stmt=null;
                $link=null;
            }
            else{
                echo "user n'existe pas";
                $stmt=null;
                $link=null;
                return 404;
            }
        }
        else{
                $stmt=null;
                $link=null;
                return false;
            }
        }
        //deconnexion de la db
        // retour de la reponse*/
    $servername='localhost';
    $username='root';
    $password='';
    $dbname = "empdept";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die("Could not Connect MySql Server:".mysql_error());
        }

        if(isset($_POST['submit'])) {
            $name = $_POST['name'];
            $job = $_POST['job'];
            $salary = $_POST['salary'];
            $dname = $_POST['dname'];
            $location = $_POST['location'];
            $hiredate = $_POST['hiredate'];
            $deptno = $_POST['deptno'];
            $sql = "INSERT INTO emp (`empno`, `ename`, `job`, `mgr`, `hiredate`, `sal`, `comm`, `deptno`)
            VALUES ('empno','$name','$job', 'mgr', '$hiredate', '$salary', 'comm', '$deptno')";
            if (mysqli_query($conn, $sql)) {
                echo "New record has been added successfully !";
                } else {
            echo "Error: " . $sql . ":-" . mysqli_error($conn);
            }
            $sqli = "INSERT INTO dept (`deptno`, `dname`, `loc`)
            VALUES ('$deptno','$dname','$location')";
            if (mysqli_query($conn, $sql)) {
                echo "New record has been added successfully !";
                } else {
            echo "Error: " . $sqli . ":-" . mysqli_error($conn);
            }
        mysqli_close($conn);
    }
?>