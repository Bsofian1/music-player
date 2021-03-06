const trackBar = (_ =>{

    //define state of the module
    const state = {
        currentTrackTime: 0,
        fullTrackTime: 0,
        fillWidth: 0
    }

    //cache the DOM
    const trackBarEl = document.querySelector(".track-bar")
    const trackBarFillEl = document.querySelector(".track-bar__fill")

    const init = _ => {
         render()
    }

    const render = _ => {
        trackBarFillEl.style.width = `${state.fillWidth}%`
    }

    const getPercent =(a,b) => {
        return (a/b)* 100
    }

    const setState = obj => {
        state.currentTrackTime = obj.currentTime;
        state.fullTrackTime = obj.duration;
        state.fillWidth = getPercent(state.currentTrackTime, state.fullTrackTime)
        render()
    }

    return{
        init,
        setState
    }

})();

export default trackBar;