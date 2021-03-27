/* eslint-disable @typescript-eslint/ban-ts-comment,no-var */
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import videojs from 'video.js';
import 'videojs-record';

var options = {
  controls: true,
  width: 320,
  height: 240,
  fluid: false,
  bigPlayButton: false,
  controlBar: {
    volumePanel: false,
  },
  plugins: {
    record: {
      audio: false,
      video: true,
      maxLength: 10,
      displayMilliseconds: false,
      debug: true,
    },
  },
};

@Component({
  selector: 'ai-playground-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  captureEvents$ = new Subject();

  ngOnInit(): void {
    console.log('init');
  }

  register(): void {
    // @ts-ignore
    const player = videojs('myVideo', options, function () {
      // print version information at startup
      console.log('statup');
    });

    // error handling
    player.on('deviceError', function () {
      // @ts-ignore
      console.warn('device error:', player.deviceErrorCode);
    });

    player.on('error', function (element, error) {
      console.error(error);
    });

    // user clicked the record button and started recording
    player.on('startRecord', function () {
      console.log('started recording!');
    });

    // user completed recording and stream is available
    player.on('finishRecord', function () {
      // the blob object contains the recorded data that
      // can be downloaded by the user, stored on server etc.
      // @ts-ignore
      console.log('finished recording: ', player.recordedData);
    });
  }
}
