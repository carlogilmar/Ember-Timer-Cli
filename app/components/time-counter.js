import Component from '@ember/component';

export default Component.extend({

  currentTime: Ember.computed('startTime', function(){
    //let startTime = this.get('startTime');
    let startTime = 1525316238633;
    let finalTime = startTime + 150;
    let current = Date.now();
    let available = current < finalTime;
    let usedTime = current - startTime;
    console.log("Start time: "+startTime);
    console.log("Final Time: "+finalTime);
    console.log("Current Time: "+current);
    console.log("Available "+available);
    console.log("Used Time "+usedTime);
    return { time:usedTime, available:available};
  })

});
