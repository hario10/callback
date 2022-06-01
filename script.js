$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    success: function(hasil){
        let table = "";
        hasil.forEach(function(t){
            table += showTable(t)
        });
        $('.daftar-table').html(table);
    },
    error: function(e){
        console.log(e.responseText);
    }
});
function showTable(t){
    return `<tr>
                <td>${t.id}</td>
                <td>${t.name}</td>
                <td>${t.username}</td>
                <td>${t.email}</td>
                <td>${t.address.street}, ${t.address.suite}, ${t.address.city}</td>
                <td>${t.company.name}</td>
            </tr>`;
}