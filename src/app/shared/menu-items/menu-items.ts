import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;

}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'projects', type: 'link', name: 'Proyectos', icon: 'table_chart' },
  { state: 'typeCases', type: 'link', name: 'tipos de caso', icon: 'assignment_turned_in' },
  { state: 'projectList', type: 'link', name: 'Mis Proyectos', icon: 'table_chart' },
  { state: 'Proximos', type: 'link', name: 'Proximos', icon: 'access_alarms' },
  { state: 'nuevoProyecto', type: 'link', name: 'Nuevo Proyecto', icon: 'control_point' },
  { state: 'users', type: 'link', name: 'Usuarios', icon: 'supervisor_account' },

  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
