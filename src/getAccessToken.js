export default async function getAccessToken() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic YTcyYzM0ZmVkMTFiNDNiMmI1YjY3NzBmZTZkMTUzZTQ6RDg4NmNRQkhGeEFwdG9PbDlISEdqQld6Q1dtdDFEckQ="
  );
  myHeaders.append(
    "Content-Type",
    "multipart/form-data; boundary=--------------------------471701498638889937057495"
  );

  var formdata = new FormData();
  formdata.append("grant_type", "client_credentials");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow"
  };

  return fetch(
    "https://us.battle.net/oauth/token?grant_type=client_credentials",
    requestOptions
  )
    .then(response => response.json())
    .then(json => json.access_token);
}
