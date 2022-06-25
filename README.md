# eKool-Free-Statistics
The provided method will let you view the grade statistics without purchasing the **Family Premium**.\
This method was developed while researching the **eKool's** source code.


## Instructions
1. Log into your account connected to an institution (a school)
2. Navigate to a **Grades** section
3. Open the browser console and execute the following code:\
*Notice: this code is also provided in **index.js** file!*
```js
studGradesRep.showGraph = function(c, b, a) {
    clayoutPH.initMMModalDialog();
    var e = TemplateEngine.parseById("hidden_p_reports_gradingEvent_graph", null);
    clayoutPH.updateMMModalDialogContent(e);
    gradesManager.getGradesFrequencyForJournalEvent(dwrNumber(studGradesRep.context), dwrNumber(c), dwrNumber(b), dwrBoolean(a), {
        callback: function(h) {
            if (h.returnObject.eventId == dwrNumber(c)) {
                studGradesRep.drawGraph(h.returnObject);
            }
            hideLoadingIndicator("modaldialog");
        }
    });
}
```

4. Choose any grade and click the **Show Statistics..** button
5. If everything is done correctly, the graphs window should display.





	
