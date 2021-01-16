'use strict'

const pMap = require('p-map')
const cheerio = require('cheerio')
const got = require('got')
const { resolve } = require('url')

const baseUrl = 'https://github.com'

exports.main = async () => {
  const { body } = await got(`https://github.com/trending`)

  const $ = cheerio.load(body)
  const repos = $('.repo-list li').get().map((li) => {
    try {
      const $li = $(li)
      const $link = $li.find('h3 a')
      const url = resolve(baseUrl, $link.attr('href'))
      const linkText = $link.text()
      const repoParts = linkText.split('/').map((p) => p.trim())
      const desc = $li.find('p').text().trim()

      return {
        url,
        userName: repoParts[0],
        repoName: repoParts[1],
        desc
      }
    } catch (err) {
      console.error('parse error', err)
    }
  }).filter(Boolean)

  return repos
}