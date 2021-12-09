$(document).ready(function () {
  const url = $('#dataTable').attr('url');
  const parsUrl = url.split('/')[1];
  const state = $('#dataTable').attr('state');

  $.ajax({
    type: 'GET',
    url,
    dataType: 'json',
    success: function (response) {
      if (state === 'full') {
        response.columns.push({
          data: 'id',
          title: '',
          searchable: false,
          sortable: false,
          render: function (id, type, full, meta) {
            return `<span>
            <a href="/${parsUrl}/detail/${id}" class="modal-open" title="Detail ${full.nama}" id="${id}"><i class="fas fa-info-circle"></i></a> | 
            <a href="/${parsUrl}/form/${id}" class="modal-open" title="Edit ${full.nama}" id="${id}"><i class="fas fa-edit"></i></a> | 
            <a href="/${parsUrl}/delete/${id}" onclick="return confirm('Anda yakin ingin menghapus item ini?');" title="Delete ${full.nama}" id="${id}"><i class="fas fa-trash text-danger"></i></a>
            </span>`;
          },
        });
      } else if (state === 'detail') {
        response.columns.push({
          data: 'id',
          title: '',
          searchable: false,
          sortable: false,
          render: function (id, type, full, meta) {
            return `<span>
            <a href="/${parsUrl}/detail/${id}" class="modal-open" title="Detail ${full.nama}" id="${id}"><i class="fas fa-info-circle"></i></a>        
            </span>`;
          },
        });
      }

      $('#dataTable').DataTable({
        rowReorder: {
          selector: 'td:nth-child(2)',
        },
        language: {
          paginate: {
            next: '<i class="fa fa-chevron-right"></i>',
            previous: '<i class="fa fa-chevron-left"></i>',
          },
        },
        processing: true,
        retrieve: true,
        responsive: true,
        searching: false,
        // dom: "Blrtip",
        data: response.data,
        columns: response.columns,
      });
    },
  });
});
