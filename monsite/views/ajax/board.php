
<div class="database flex-center" >
<h1>THE BEST IS THE LESS</h1>
<?php
$link =  mysqli_connect("db_mysql","user","test","mabase");
 $result=mysqli_query($link, "SELECT * FROM level1 ORDER BY score LIMIT 10");
 echo "<table>";
 echo "<tr>";
 echo "<th colspan='3'>"; echo "<span style='color: #ffff00'>EASY</span>"; echo "</th>";
 echo "</tr>";

 echo "<tr>";
    echo "<th>"; echo "RANK"; echo "</th>";
    echo "<th>"; echo "USERNAME"; echo "</th>";
    echo "<th>"; echo "SCORE"; echo "</th>";
  echo "</tr>";
 $i=1;
while($row = mysqli_fetch_assoc($result)) {
   // Your code goes here...
   // OR


    echo "<tr>";
    echo "<td >"; echo $i++; echo "</td>";
    echo "<td >"; print_r($row["nomJoueur"]); echo "</td>";
    echo "<td>"; print_r($row["score"]); echo "</td>";
    echo "</tr>";


}
 echo "</table>";

 $result2=mysqli_query($link, "SELECT * FROM level2 ORDER BY score LIMIT 10");
 echo "<table>";
 echo "<tr>";
 echo "<th colspan='3'>"; echo "<span style='color: #ffff00'>MEDIUM</span>"; echo "</th>";
 echo "</tr>";

 echo "<tr>";
    echo "<th>"; echo "RANK"; echo "</th>";
    echo "<th>"; echo "USERNAME"; echo "</th>";
    echo "<th>"; echo "SCORE"; echo "</th>";
  echo "</tr>";
 $i=1;
while($row = mysqli_fetch_assoc($result2)) {
   // Your code goes here...
   // OR


    echo "<tr style='border:1px solid red;'>";
    echo "<td >"; echo $i++; echo "</td>";
    echo "<td >"; print_r($row["nomJoueur"]); echo "</td>";
    echo "<td>"; print_r($row["score"]); echo "</td>";
    echo "</tr>";


}
 echo "</table>";

 $result3=mysqli_query($link, "SELECT * FROM level3 ORDER BY score LIMIT 10");
 echo "<table>";
 echo "<tr>";
 echo "<th colspan='3'>"; echo "<span style='color: #ffff00'>HARD</span>"; echo "</th>";
 echo "</tr>";

 echo "<tr>";
    echo "<th>"; echo "RANK"; echo "</th>";
    echo "<th>"; echo "USERNAME"; echo "</th>";
    echo "<th>"; echo "SCORE"; echo "</th>";
  echo "</tr>";
 $i=1;
while($row = mysqli_fetch_assoc($result3)) {
   // Your code goes here...
   // OR


    echo "<tr>";
    echo "<td >"; echo $i++; echo "</td>";
    echo "<td >"; print_r($row["nomJoueur"]); echo "</td>";
    echo "<td>"; print_r($row["score"]); echo "</td>";
    echo "</tr>";


}
 echo "</table>";

 mysqli_close($link);
        ?>
</div>
