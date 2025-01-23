export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <h1></h1>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories THe Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label  htmlFor="wd-group"> Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                <option value="ASSIGNMENT">Assignment</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
            <label  htmlFor="wd-display-grade-as"> Display Grade as </label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
        <td align="right" valign="top">
            <label  htmlFor="wd-submission-type"> Submission Type </label>
        </td>
        <td>
            <select id="wd-submission-type">
            <option value="ONLINE">Online</option>
            </select>
        </td>
        </tr>
        <br />
        <tr>
        <td align="right" valign="top">
            <label  htmlFor="wd-online-entry-options"> Online Entry Options </label>
        </td>
        <input type="checkbox" name="check-entry-option" id="wd-text-entry"/>
        <label htmlFor="wd-text-entry">Text Entry</label><br/>

        <input type="checkbox" name="check-entry-option" id="wd-website-url"/>
        <label htmlFor="wd-website-url">Website URL</label><br/>

        <input type="checkbox" name="check-entry-option" id="wd-media-recordings"/>
        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

        <input type="checkbox" name="check-entry-option" id="wd-student-annotation"/>
        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

        <input type="checkbox" name="check-entry-option" id="wd-file-upload"/>
        <label htmlFor="wd-file-upload">File Uploads</label><br/>
        <br></br>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-name">Assign Assignment to</label>
          </td>
          <td>
            <input id="wd-name" value="Everyone" />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
        <label htmlFor="wd-due-date"> Due </label>
        </td>
        <input type="date"
       defaultValue="2025-01-23"
       id="wd-due-date"/><br/>
       </tr>
       <br></br>
       <tr>
        <td align="right" valign="top">
        <label htmlFor="wd-available-from"> Available from </label>
        </td>
        <input type="date"
       defaultValue="2025-01-07"
       id="wd-available-from"/><br/>
       </tr>
       <tr>
        <td align="right" valign="top">
        <label htmlFor="wd-available-until"> Until </label>
        </td>
        <input type="date"
       defaultValue="2025-01-25"
       id="wd-available-until"/><br/>
       </tr>
       <br></br>
       <tr>
        <td align="right" valign="top">
        <button id="wd-cancel-button">Cancel</button>
        <button id="wd-save-button">Save</button>
        </td>
        </tr>
      </table>
    </div>
);}
