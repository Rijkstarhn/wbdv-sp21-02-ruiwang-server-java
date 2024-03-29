package com.example.wbdvsp2102ruiwangserverjava.repositories;

import com.example.wbdvsp2102ruiwangserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository extends CrudRepository<Widget, Long> {
    @Query(value = "SELECT * FROM wbdv_sp21_02_schema.widgets where topic_id = :tid", nativeQuery = true)
    public List<Widget> findWidgetsForTopic(@Param("tid") String topicId);
}
