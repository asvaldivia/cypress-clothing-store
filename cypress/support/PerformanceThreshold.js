class PerformanceThreshold {
  static thresholds = {
    performance: 40,
    accessibility: 50,
    "best-practices": 20,
    seo: 30,
    pwa: 30
  };

  static getThresholds() {
    return this.thresholds;
  }
}

export default PerformanceThreshold;

