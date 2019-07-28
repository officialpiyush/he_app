document.getElementById("capacity").disabled = true;

let od,no,length;

$("#od_of_pipe").change(function() {
    od = $("#od_of_pipe").val();
    calulate();
});

$("#length_of_pipe").change(function() {
    length = $("#length_of_pipe").val();
    calulate();
});

$("#no_of_pipe").change(function() {
    no = $("#no_of_pipe").val();
    calulate();
});

function calulate() {    
    if($("#od_of_pipe").val() === "" || $("#length_of_pipe").val() === "" || $("#no_of_pipe").val() === "") return false;
    if(!od || !length || !no) return false;
    try {
        parseFloat(od);
        parseFloat(length);
        parseFloat(no);
    } catch (err) {
        return $("#capcaity").attr("value", "Enter numbers.");
    }
    if(od < 0 || length < 0 || no < 0) {
        return $("#capcaity").attr("value", "Enter positive numbers please.");
    }
        let result = (((od * Math.PI) + ((od * Math.PI) * length) + (((od * Math.PI) * length) * no)) / 1000000);
        return $("#capcaity").attr("value", result);
}