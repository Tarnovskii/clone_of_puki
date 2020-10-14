<h1>Back-end REST API</h1>

<h3>PLAN420</h3>
<h4>[1.Initial database]()<br>
[2.Authorization]()<br>
[3.Reset password]()<br>
[4.Activate account]()<br>
[5.Get role of logged in user]()<br></h4>

<h3>Initial data in the database(temporary data for tests)</h3>
<h4>Table: universities</h4>
<pre>
id=1; name=KPI
id=2; name=KNU
</pre>
<h4>Table: access_key</h4>
<pre>
id=1; university_id=1; key=qwerty
id=2; university_id=1; key=qwerty123
id=3; university_id=2; key=qwer
</pre>
<h4>Table: classes</h4>
<pre>
id=1; name=KV-71
id=2; name=KV-72
id=3; name=KV-73
id=4; name=KV-74
</pre>
<h4>Table: roles</h4>
<pre>
id=1; name=ROLE_ADMIN
id=2; name=ROLE_TEACHER
id=3; name=ROLE_STUDENT
</pre>

<hr>

<h3>Authorization</h3>

<h4>Login</h4>
<ul>URL<pre>/api/v1/auth/login</pre></ul>
<ul>Method<pre>POST</pre></ul>
<ul>URL Params<pre>none</pre></ul>
<ul>Data Params<pre>{
    username=[string]
    password=[string]
}</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: 
If Student:
{
    username=[string]
    email=[string]
    phone_number=[string]
    first_name=[string]
    last_name=[string]
    group=
        {
            id=[integer]
            name=[string]
        }
    token=[string]
}
If Teacher:
{
    username=[string]
    email=[string]
    phone_number=[string]
    groups=
        [{
            id=[integer]
            name=[string]
        }...]
    token=[string]
}</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: "invalid username or password"</pre></ul>

<h4>Registration</h4>
<ul>URL<pre>/api/v1/auth/register</pre></ul>
<ul>Method<pre>POST</pre></ul>
<ul>URL Params<pre>none</pre></ul>
<ul>Data Params<pre>
If Student:
{
    username=[string],
    firstName=[string],
    lastName=[string],
    email=[string],
    password=[string],
    phoneNumber=[string],
    groupName=[string]
}
If Teacher:
{
    username=[string],
    firstName=[string],
    lastName=[string],
    email=[string],
    password=[string],
    phoneNumber=[string],
    accessKey=
            {
                key=[string]
            }
}</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: "confirm account on email"</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: "user with username: ${username} already exists"</pre></ul>

<h4>Logout</h4>
<ul>URL<pre>/api/v1/user/logout</pre></ul>
<ul>Method<pre>POST</pre></ul>
<ul>Headers<pre>Authorization: Bearer_${token}</pre></ul>
<ul>URL Params<pre>none</pre></ul>
<ul>Data Params<pre>none</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: "logged out"</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: none</pre>
OR
<pre>Code: 403
Content: "JWT token is expired or invalid"</pre></ul>

<hr>

<h3>Reset password</h3>

<h4>Reset password</h4>
<ul>URL<pre>/api/v1/user/resetPassword</pre></ul>
<ul>Method<pre>POST</pre></ul>
<ul>URL Params<pre>email=[string]</pre></ul>
<ul>Data Params<pre>none</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: "mail send"</pre></ul>
<ul>Error Response:<pre>Code: 400
Content: "user with email: ${email} not found"</pre></ul>

<h4>Confirm password</h4>
<ul>URL<pre>/api/v1/user/confirmPassword</pre></ul>
<ul>Method<pre>POST</pre></ul>
<ul>URL Params<pre>user=[string] \\"t" - if teacher; "s" - if student
password=[string]
token=[string]</pre></ul>
<ul>Data Params<pre>none</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: "password changed"</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: "token is invalid(or expired)" \\token is valid for 15 minutes</pre></ul>

<hr>

<h3>Activate account</h3>
<ul>URL<pre>/api/v1/user/activate</pre></ul>
<ul>Method<pre>POST</pre></ul>
<ul>URL Params<pre>user=[string] \\"t" - if teacher; "s" - if student
token=[string]</pre></ul>
<ul>Data Params<pre>none</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: "account activated"</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: "token is invalid(or expired)" \\token is valid for 24 hours</pre></ul>

<hr>

<h3>Get role of logged in user</h3>
<ul>URL<pre>/api/v1/user/isLogin</pre></ul>
<ul>Method<pre>GET</pre></ul>
<ul>Headers<pre>Authorization: Bearer_${token}</pre></ul>
<ul>URL Params<pre>none</pre></ul>
<ul>Data Params<pre>none</pre></ul>
<ul>Success Response:<pre>Code: 200
Content: 
{
    roles=[
            roleName=[string]
            ...]
}</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: "JWT token is expired or invalid"</pre></ul>


