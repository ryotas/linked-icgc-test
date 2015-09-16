PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
PREFIX icgc: <http://icgc.link/vocab/>
PREFIX hgnc_vocabulary: <http://bio2rdf.org/hgnc_vocabulary:>
PREFIX bio2rdf_vocabulary: <http://bio2rdf.org/bio2rdf_vocabulary:>
SELECT
  (COUNT(*) AS ?item)
WHERE {
  SELECT DISTINCT
    ?id
  WHERE {
    ?donor icgc:donor_id ?id .
    # RELATIONSHIP
    ?effect icgc:mutation ?mutation .
    ?detection icgc:mutation ?mutation .
    ?detection icgc:donor ?donor .
    ?donor icgc:project ?project .
    # PROPERTY
    ?project icgc:project_code ?project_code .
    ?project icgc:primary_site ?primary_site .
    ?donor icgc:donor_sex ?gender .
    ?donor icgc:donor_vital_status ?vital_status .
    # FACET
    FILTER(?project_code IN ("BLCA-CN"))
    FILTER(?primary_site = ?primary_site)
    FILTER(?gender = ?gender)
    FILTER(?vital_status = ?vital_status)
  }
}
