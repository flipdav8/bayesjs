import * as expect from 'expect'

import { IInferenceEngine } from '../../src/types'
import { network } from '../../models/asia'
import { InferenceEngine } from '../../src/index'

const infersAsiaGivenVisitToAsia = (engine: IInferenceEngine) => {
  engine.setEvidence({ VisitToAsia: ['Visit'] })
  const { infer } = engine
  expect(infer({ VisitToAsia: ['Visit'] }).toFixed(4)).toBe('1.000')
}

const tests: { [key: string]: (engine: IInferenceEngine) => void } = {
  'infers given VisitToAsia Visit': infersAsiaGivenVisitToAsia,
}

describe('infers', () => {
  describe('asia network', () => {
    const testNames = Object.keys(tests)
    const engine = new InferenceEngine(network)

    for (const testName of testNames) {
      const method = tests[testName]

      it(`${testName}`, () => method(engine))
    }
  })
})
