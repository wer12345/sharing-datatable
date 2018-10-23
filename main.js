$(document).ready(function() {
    $('#example').DataTable({
        columnDefs: [
            {
                orderable: false,
                className: 'select-checkbox',
                targets: 0,
            },
        ],
        select: {
            style: 'multi',
        },
    });
})
