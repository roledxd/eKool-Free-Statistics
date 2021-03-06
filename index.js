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
