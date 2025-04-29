from flask import Flask, request, render_template, jsonify
import requests

app = Flask(__name__)

SOLR_URL = "http://localhost:8983/solr/articles/select"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search')
def search():
    query = request.args.get('q', '*:*')
    category = request.args.get('category')
    author = request.args.get('author')
    published = request.args.get('published')

    params = {
        'q': f'title:{query}' if query else '*:*',
        'wt': 'json'
    }

    fq = []
    if category:
        fq.append(f'category:{category}')
    if author:
        fq.append(f'author:"{author}"')
    if published:
        fq.append(f'published:{published}')
    if fq:
        params['fq'] = fq

    response = requests.get(SOLR_URL, params=params)
    return jsonify(response.json())
