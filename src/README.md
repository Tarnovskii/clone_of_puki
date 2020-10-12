<h1>Back-end REST API</h1>

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
Content: none</pre></ul>
<ul>Error Response:<pre>Code: 403
Content: "user with username: ${username} already exists"</pre></ul>
