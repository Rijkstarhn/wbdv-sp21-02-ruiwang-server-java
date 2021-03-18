package com.example.wbdvsp2102ruiwangserverjava.services;

import com.example.wbdvsp2102ruiwangserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
  private List<Widget> widgets = new ArrayList<Widget>();

  {
    Widget w1 = new Widget(123l, "ABC123", "HEADING", 1, "Widgets for Topic ABC123", "123");
    Widget w2 = new Widget(234l, "ABC123", "PARAGRAPH", 1, "Lorem Ipsum", "234");
    Widget w3 = new Widget(345l, "ABC234", "HEADING", 2, "Widgets for Topic ABC234", "345");
    Widget w4 = new Widget(456l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum", "456");
    Widget w5 = new Widget(567l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum", "567");

    widgets.add(w1);
    widgets.add(w2);
    widgets.add(w3);
    widgets.add(w4);
    widgets.add(w5);
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public Widget createWidget(String tid, Widget widget) {
    Long id = new Date().getTime();
    Widget addWidget = new Widget(id, tid, "PARAGRAPH", 1, "LOk Tar!", Long.toString(id));
    widgets.add(addWidget);
    return addWidget;
  }

  public List<Widget> findWidgetsForTopic(String topicId) {
    List<Widget> ws = new ArrayList<Widget>();
    for (Widget widget : widgets) {
      if (topicId.equals(widget.getTopicId())) {
        ws.add(widget);
      }
    }
    return ws;
  }

  public int updateWidget(String wid, Widget widget) {
    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getWidgetId().equals(wid)) {
        widgets.set(i, widget);
        return 1;
      }
    }
    return 0;
  }

  public int deleteWidget(String wid) {
    for (Widget widget : widgets) {
      if (widget.getWidgetId().equals(wid)) {
        widgets.remove(widgets.indexOf(widget));
        return 1;
      }
    }
    return 0;
  }
}
