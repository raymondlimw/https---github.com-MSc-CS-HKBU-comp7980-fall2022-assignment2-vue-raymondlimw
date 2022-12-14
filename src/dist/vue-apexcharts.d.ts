import Vue, { Component, ComponentOptions } from 'vue';
import { PluginObject } from 'vue/types/plugin';
import ApexCharts, { ApexOptions } from 'apexcharts';

// this interface matches the exposed properties to enable straightforward
// and strongly typed binding to the <apexchart> component properties
// (see: https://apexcharts.com/docs/vue-charts/#props)
export interface VueApexChartConfig {
  type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'rangeBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'radar' | 'polarArea' | 'treemap' | 'boxPlot';
  series: any;
  height?: string | number;
  width?: string | number;
  options?: ApexOptions;
}

export interface VueApexChartsComponent extends VueApexChartConfig, Vue {
  // data
  readonly chart?: ApexCharts;

  // props (see: VueApexChartConfig)

  // methods
  init(): Promise<void>;
  refresh(): Promise<void>;
  destroy(): void;
  updateOptions(options: any, redrawPaths?: boolean, animate?: boolean, updateSyncedCharts?: boolean): Promise<void>;
  updateSeries(newSeries: any, animate?: boolean): Promise<void>;
  toggleSeries(seriesName: string): any;
  showSeries(seriesName: string): void;
  hideSeries(seriesName: string): void;
  resetSeries(): void;
  zoomX(min: number, max: number): void;
  toggleDataPointSelection(seriesIndex: number, dataPointIndex?: number): any;
  appendData(newData: any): Promise<void>;
  appendSeries(newSeries: any, animate?: boolean): Promise<void>;
  addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
  removeAnnotation(id: string, options?: any): void;
  clearAnnotations(): void;
  dataURI(options?: { scale?: number, width?: number }): Promise<void>
}

declare const VueApexCharts: Component & ComponentOptions<Vue> & PluginObject<any>;

export default VueApexCharts;

declare module 'vue/types/vue' {
  interface Vue {
    $apexcharts: typeof ApexCharts;
  }
}
