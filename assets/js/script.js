fetch(
    'https://api.github.com/users/lilyjuly/repos?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });