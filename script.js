window.setOfInequalities = function setOfInequalities () {
  const value = document.querySelector('[name="setOfInequalities-input"]').value
  const xRange = document.querySelector('[name="setOfInequalities-xRange"]').value
  const yRange = document.querySelector('[name="setOfInequalities-yRange"]').value

  console.log(value, xRange, yRange)

  const xRangeF = `(x,${xRange})`
  const yRangeF = `(y,${yRange})`
  const inequalities = value.split(',').map(a => a.trim())

  const sageEl = document.getElementById('setOfInequalities-sage')
  sageEl.innerHTML = `
x,y=var('x y')
region_plot([${inequalities.map(e => e + '<=0').join(', ')}],${xRangeF},${yRangeF})${inequalities.map(e => ` + implicit_plot(${e},${xRangeF},${yRangeF},color='black',linestyle='dashed')`).join('')}
  `

  window.sagecell.makeSagecell({ inputLocation: '.sage' })
}
