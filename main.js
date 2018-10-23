$(document).ready(function() {
    var table = $('#example').DataTable({
        ajax: 'data.json',
        select: {
            style: 'multi',
        },
        columns: [
            {
                data: 'nama',
            },
            {
                data: 'umur',
            },
            {
                data: 'fokus',
            },
        ],
    });
    $('#reload').on('click', function(e) {
        e.preventDefault();
        table.ajax.reload(null, false);
    })
})

