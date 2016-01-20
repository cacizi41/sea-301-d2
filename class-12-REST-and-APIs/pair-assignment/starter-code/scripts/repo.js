(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
  //fetch repo with ajax -1st requirement
  //write a success function to do something -2nd requirement
  //var qs = '?/per_page=.....'
  //$.get('/github/users/cacizi41/repos'+ qs'')
  // .done(funciton(data, message, xhr){
  //     console.log('my-data' + data);
  //    repos.all = data;
  // })
  // .done(callback)
  // };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {                //.with export to window
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
