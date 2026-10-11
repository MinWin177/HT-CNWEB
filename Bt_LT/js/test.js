<script language="javascript" type="text/javascript">
var idq;
function doihinh(){
    var arrdoihinh = new Array();
    arrdoihinh[0] = "Hình vuông";
    arrdoihinh[1] = "Hình chữ nhật";
    arrdoihinh[2] = "Hình tròn";
    arrdoihinh[3] = "Hình tam giác";
    arrdoihinh[4] = "Hình thoi";
    idq = Math.floor(Math.random() * 5);
    document.getElementById("hinh").innerHTML = arrdoihinh[idq];
    
}