$(document).ready(function () {
  $("#btn").click(function (e) {
    e.preventDefault();
    console.log("Add Btn Clicked");

    var istt = $("#issuetitle").val();
    var descp = $("#description").val();
    var svt = $("#severity").val();

    const inputs = {
      title1: istt,
      isssuedecp: descp,
      sevrty1: svt,
    };
    // for avvoiding local storage overwriting if local storag is not conataining any element from b4
    if (localStorage.getItem("issueslist") === null) {
      const issues = [];

      issues.push(inputs);
      // creating a array issueslit for storing issues
      localStorage.setItem("issueslist", JSON.stringify(issues));
    }
    // if already a local storage item exits  we read it first then push the next value so overwriting does not  occurs
    else {
      const issues = JSON.parse(localStorage.getItem("issueslist"));
      issues.push(inputs);
      localStorage.setItem("issueslist", JSON.stringify(issues));
    }

    if (istt === "" || descp === "") {
      alert("Input Field is empty");
    } else {
      $("#tb").prepend(
        '<tr id="tr1"><td>' +
          istt +
          "</td><td>" +
          descp +
          "</td><td>" +
          svt +
          '</td><td> <i class="fas fa-check-circle text-success"></i> &nbsp &nbsp &nbsp <i class="fa fa-trash-alt text-danger" aria-hidden="true" id="1"></i></td></tr>'
      );
      $("#issuetitle").val("");
      $("#description").val("");
      $("#severity").val("Low");
    }
  });

  $(document).on("click", ".fa-trash-alt", function (e) {
    e.preventDefault();
    $(this).closest("tr").remove();
    localStorage.clear()
   
    // $(this).closest("tr").css("background-color", "green");
    //append code here
  });

  $(document).on("click", ".fa-check-circle", function (e) {
    e.preventDefault();
    $(this).closest("tr").css("background", "rgb(102, 255, 51)");
    $(this).hide();
    // $(this).closest("tr").css("background-color", "green");
    //append code here
  });
});

// fetching old issues
function oldf() {
  const oldissues = JSON.parse(localStorage.getItem("issueslist"));

  for (let index = 0; index < oldissues.length; index++) {
    const titleold = oldissues[index].title1;
    const descpold = oldissues[index].isssuedecp;
    const svrtold = oldissues[index].sevrty1;
    $("#tb").prepend(
      '<tr id="tr1"><td>' +
        titleold +
        "</td><td>" +
        descpold +
        "</td><td>" +
      svrtold +
        '</td><td> <i class="fas fa-check-circle text-success"></i> &nbsp &nbsp &nbsp <i class="fa fa-trash-alt text-danger" aria-hidden="true" id="1"></i></td></tr>'
    );
    $("#issuetitle").val("");
    $("#description").val("");
    $("#severity").val("Low");
  }

  for (let index = 0; index < issues.length; index++) {
    const titleold = issues[index].title1;
    const issold = issues[index].isssuedecp;
    const testnameold = issues[index].testname1;
    const svrtold = issues[index].sevrty1;

    const li = document.createElement("tbody");
    li.innerHTML += ` <table class="table table-bordered"><thead class="bg-secondary text-light">
      <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Tester</th>
          <th>Severity</th>
          <th>Action</th>
      </tr>
  </thead><tbody>
              <tr>
              <td>${titleold}</td>
              <td>${issold}</td>
              <td>${testnameold}</td>
              <td>${svrtold}</td>
              <td><button class="btn  btndel btn-warning text-center"  id="pp" onclick="deleteRow(this)" >Delete <i class="fas fa-trash-alt"></i></button></td>
              </tr>
              </tbody></table>`;
    //   append for displaying on html
    issue_list.appendChild(li);
    //   for clearing input
    // document.getElementById("myform1").reset();
  }
}
