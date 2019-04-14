export const LandingTypes = {
    LOAD_EXPERIMENTS: 'LANDING/LOAD_EXPERIMENT',
    EXPERIMENTS_LOADED: 'LANDING/EXPERIMENTS_LOADED'
  }
  
  export const LandingActions = {
    loadExperiments: () => ({ type: LandingTypes.LOAD_EXPERIMENTS }),
    experimentsLoaded: experiments => ({ type: LandingTypes.EXPERIMENTS_LOADED, experiments })
  }
  