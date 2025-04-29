$(document).ready(function () {
    function fetchResults() {
      const query = $('#search-box').val();
      const category = $('#category-filter').val();
      const author = $('#author-filter').val();
      const published = $('#published-filter').val();
  
      $.get('/search', { q: query, category, author, published }, function (data) {
        const docs = data.response.docs;
        $('#results').empty();
        docs.forEach(doc => {
          $('#results').append(`<li>
            <strong>${doc.title}</strong><br>
            Author: ${doc.author} | Category: ${doc.category} | Published: ${doc.published}
          </li>`);
        });
      });
    }
  
    $('#search-box').on('input', fetchResults);
    $('#category-filter').on('change', fetchResults);
    $('#author-filter').on('input', fetchResults);
    $('#published-filter').on('change', fetchResults);
  
    fetchResults(); // Load initial data
  });
  