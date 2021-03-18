package com.example.wbdvsp2102ruiwangserverjava.models;

public class Widget {
  private String name;
  private Long id;
  private Long key;
  private String type;
  private Integer widgetOrder;
  private String text;
  private String url;
  private Integer size;
  private Integer width;
  private Integer height;
  private String cssClass;
  private String style;
  private String value;
  private String topicId;
  private String widgetId;

  public Widget() {}

  public Widget(Long id, String topicId, String type, Integer size, String text, String widgetId) {
    this.id = id;
    this.key = id;
    this.topicId = topicId;
    this.type = type;
    this.size = size;
    this.text = text;
    this.widgetId = widgetId;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }

  public String getWidgetId() {
    return widgetId;
  }

  public void setWidgetId(String widgetId) {
    this.widgetId = widgetId;
  }

  public Long getKey() {
    return key;
  }

  public void setKey(Long key) {
    this.key = key;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}
