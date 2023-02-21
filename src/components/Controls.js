import React, { forwardRef} from "react";
import PropTypes from "prop-types";
import {withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import '../styles/player.css';

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onPlayPause,
      playing,
      played,
      elapsedTime,
      onMute,
      muted,
      onVolumeSeekDown,
      volume,
      onVolumeChange,
    },
    ref
  ) => {

    return (
      <div ref={ref} 
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          style={{ flexGrow: 1 }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            style={{ padding: 16 }}
          >

          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ padding: 16}}
          >
            <Grid item xs={12}>
              <PrettoSlider
                min={0}
                max={100}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                value={played * 100}
                onChange={onSeek}
                className='sliderstyle'
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
              />
            </Grid>

            <Grid item style = {{ width : 600 }}>
              <Grid container alignItems="center">
                <IconButton
                  onClick={onPlayPause}
                  className='controlbutton'
                >
                  {playing ? (
                    <PauseIcon className="playPauseCircle" fontSize="large" />
                  ) : (
                    <PlayArrowIcon className="playPauseCircle" fontSize="large" />
                  )}
                </IconButton>

                <IconButton
                  onClick={onMute}
                  className='controlbutton'
                >
                  {muted ? (
                    <VolumeMute fontSize="large" />
                  ) : volume > 0.5 ? (
                    <VolumeUp fontSize="large" />
                  ) : (
                    <VolumeDown fontSize="large" />
                  )}
                </IconButton>

                <Slider
                  min={0}
                  max={100}
                  value={muted ? 0 : volume * 100}
                  onChange={onVolumeChange}
                    className='sliderstyle'
                  onMouseDown={onSeekMouseDown}
                  style = {{ width : 100 }}
                  onChangeCommitted={onVolumeSeekDown}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onPlayPause: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
};
export default Controls;
