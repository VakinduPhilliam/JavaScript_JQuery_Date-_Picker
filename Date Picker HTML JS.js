
<link href="jquery-ui.css" rel="stylesheet">
<script src="jquery.js"></script>
<script src="jquery-ui.js"></script>

<input type="text" id="date1">
<input type="text" id="date2">
<input type="text" id="calculated">


<script>

$(function() { // Shorthand for $(document).ready(function() {
      $('#date1').datepicker({onSelect: calcDiff,
            minDate: new Date(2012, 7 - 1, 8), maxDate: new Date(2012, 7 - 1, 28)});
      $('#date2').datepicker({onSelect: calcDiff,
            minDate: new Date(2012, 7 - 1, 9), maxDate: new Date(2012, 7 - 1, 28)});

    function calcDiff() {
            var d1 = $('#date1').datepicker('getDate');
            var d2 = $('#date2').datepicker('getDate');
            var diff = 0;
            if (d1 && d2) {
                  diff = Math.floor(((d2.getTime() - d1.getTime()) / 86400000)+1); // ms per day
            }
            $('#calculated').val(diff);
      }
});

</script>
