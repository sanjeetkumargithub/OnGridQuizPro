package in.ongrid.quizPortal.entities;

import javax.persistence.*;

import java.util.Date;

@MappedSuperclass
public abstract class BaseTime {
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;
    @Temporal(TemporalType.TIMESTAMP)
    private  Date updateTime;

    @PrePersist
    private  void onCreate(){
        this.createTime=new Date();
        this.updateTime=new Date();

    }
    @PreUpdate
    private  void onUpdate(){
        this.updateTime=new Date();
    }


}
