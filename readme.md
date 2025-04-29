# 🔍 Solr Search UI (HTML + JavaScript)

This project provides a modern, minimalistic frontend interface for searching documents indexed in Apache Solr. It uses plain HTML, CSS, and JavaScript (with jQuery) for simplicity and ease of deployment.

---

## 🚀 Features

- Real-time search with autocomplete functionality
- Filters by category, author, and published status
- Responsive card-style layout
- Solr-powered backend integration

---

## 🧰 Requirements

- Apache Solr (running locally or remotely)
- Python 3 and Flask (for a lightweight backend API)
- A modern web browser (Chrome, Firefox, Edge)

---

## 📦 Directory Structure

```
solr-search-ui/
├── app.py                # Flask backend to proxy search requests to Solr
├── index.html            # Frontend UI (HTML + JS)
├── static/
│   └── style.css         # Optional custom styles
├── templates/
│   └── index.html        # Optional if Flask renders the page
├── sample_data.csv       # Optional CSV to index in Solr
├── README.md             # This file
```

---

## 💠 Setup Instructions

### 1. Start Solr

If you haven't already:

```bash
brew install solr
solr start
```

Create a new core:

```bash
solr delete -c mycore      # (Optional) Delete previous core
solr create -c mycore
```

### 2. Index Sample Data

Create a file named `sample_data.csv`:

```
id,category,title,published,author
553573333,java,Java Array Example,TRUE,Kevin Yang
553579908,java,Java RMI Example,TRUE,Kevin Yang
563881328,java,Thread,TRUE,Kevin Yang
055357342Y,java,Java StringTokenizer Example,TRUE,Kevin Yang
553292123,java,Java HashMap Example,TRUE,Evan Swing
812521390,solr,The Solr Runbook,FALSE,James Cook
812550706,solr,The Apache Solr Cookbook,TRUE,James Cook
441385532,solr,The Solr REST API,FALSE,Steven Thomas
380014300,solr,SolrCloud Tutorial,TRUE,Roger Goodwill
```

Then post it:

```bash
curl http://localhost:8983/solr/mycore/update/csv?commit=true --data-binary @sample_data.csv -H 'Content-type:text/csv; charset=utf-8'
```

### 3. Run the Flask Backend

Install Flask if not installed:

```bash
pip install flask
```

Run the backend:

```bash
python app.py
```

This will start a proxy server at `http://localhost:5000` that talks to Solr.

---

## 🌐 Access the Search UI

Open your browser and go to:

```
http://localhost:5000
```

You’ll see the modern UI with live search and filtering.

---

## ⚙️ Customizing the UI

You can modify:

- `index.html` – For structure and search logic
- `style.css` – For custom styles
- `app.py` – For backend filtering logic or Solr config

---

## 🧹 Optional Cleanup

Stop Solr when done:

```bash
solr stop
```

---

## 🦾 License

MIT License. Use freely and modify as needed.

