
$(".navTrigger").click(function () {
    $(this).toggleClass("active");
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });
  
  $("#openAddFormButton").click(function () {
    $("#addFormDiv").slideDown();
  });
  
  $("#closeAddFormButton").click(function () {
      $("#addFormDiv").slideUp();
    });
  
  $("#save").click(function () {
      $("#addFormDiv").slideUp();
    });
  $(".cell-more-button").click(function () {
    $("#serviceDetail").slideDown();
  });
  
  $("#closeUpdateFormButton").click(function () {
      $("#serviceDetail").slideUp();
    });