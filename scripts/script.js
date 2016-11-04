gh.authenticate("fitzgen", "sdfk32we-FAKE-uydfs7f-rhrwe8r7");
var user = gh.user("whispyy");
user.show(function (data) {
    console.log(data.user);
});
user.repos(function (data) {
    console.log("Number of repos: " + data.repositories.length);
});
var article = gh.repo("whispyy", "test_gh-pages")
article.show(function (data) {
    console.log("Number of watchers: " + data.repository.watchers);
});
//wujs.update({ has_wiki: 0 }); 